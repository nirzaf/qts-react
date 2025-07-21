/**
 * QR Code Generator Component
 * Company: Quadrate Tech Solutions (https://quadrate.lk)
 */

import React, { useState, useEffect } from 'react';
import { Download, Copy, Eye, Settings, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { QRCodeOptions } from '@/types/employee';

interface QRCodeGeneratorProps {
  verificationToken: string;
  employeeName: string;
  verificationUrl: string;
  className?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  verificationToken,
  employeeName,
  verificationUrl,
  className = ''
}) => {
  const { toast } = useToast();
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // QR Code options
  const [options, setOptions] = useState<QRCodeOptions>({
    size: 256,
    level: 'M',
    includeMargin: true,
    color: {
      dark: '#0607E1',
      light: '#FFFFFF'
    }
  });

  // Generate QR code
  const generateQRCode = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        size: options.size.toString(),
        format: 'json',
        level: options.level,
        margin: options.includeMargin.toString(),
        color_dark: options.color.dark,
        color_light: options.color.light
      });

      const response = await fetch(`/api/verify/${verificationToken}/qr?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to generate QR code');
      }

      const data = await response.json();
      if (data.success) {
        setQrCodeDataUrl(data.data.qr_code_data_url);
      } else {
        throw new Error(data.error || 'Failed to generate QR code');
      }
    } catch (error) {
      console.error('Error generating QR code:', error);
      toast({
        title: 'Error',
        description: 'Failed to generate QR code. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Generate QR code on mount and when options change
  useEffect(() => {
    generateQRCode();
  }, [verificationToken, options]);

  // Copy verification URL to clipboard
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: 'Copied!',
        description: `${type} copied to clipboard.`
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy to clipboard.',
        variant: 'destructive'
      });
    }
  };

  // Download QR code
  const downloadQRCode = async (format: 'png' | 'svg' = 'png') => {
    try {
      const params = new URLSearchParams({
        size: options.size.toString(),
        format: format,
        level: options.level,
        margin: options.includeMargin.toString(),
        color_dark: options.color.dark,
        color_light: options.color.light
      });

      const response = await fetch(`/api/verify/${verificationToken}/qr?${params}`);
      
      if (!response.ok) {
        throw new Error('Failed to download QR code');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `verification-qr-${employeeName.replace(/\s+/g, '-').toLowerCase()}.${format}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      toast({
        title: 'Downloaded!',
        description: `QR code downloaded as ${format.toUpperCase()}.`
      });
    } catch (error) {
      console.error('Error downloading QR code:', error);
      toast({
        title: 'Error',
        description: 'Failed to download QR code.',
        variant: 'destructive'
      });
    }
  };

  // Preview verification page
  const previewVerification = () => {
    window.open(verificationUrl, '_blank');
  };

  return (
    <Card className={`w-full max-w-md ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">QR Code</CardTitle>
          <div className="flex gap-2">
            <Dialog open={showSettings} onOpenChange={setShowSettings}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>QR Code Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="size">Size</Label>
                    <Select
                      value={options.size.toString()}
                      onValueChange={(value) => setOptions(prev => ({ ...prev, size: parseInt(value) }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="128">Small (128px)</SelectItem>
                        <SelectItem value="256">Medium (256px)</SelectItem>
                        <SelectItem value="512">Large (512px)</SelectItem>
                        <SelectItem value="1024">Extra Large (1024px)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Error Correction</Label>
                    <Select
                      value={options.level}
                      onValueChange={(value: 'L' | 'M' | 'Q' | 'H') => setOptions(prev => ({ ...prev, level: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="L">Low (L)</SelectItem>
                        <SelectItem value="M">Medium (M)</SelectItem>
                        <SelectItem value="Q">Quartile (Q)</SelectItem>
                        <SelectItem value="H">High (H)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="margin"
                      checked={options.includeMargin}
                      onCheckedChange={(checked) => setOptions(prev => ({ ...prev, includeMargin: checked }))}
                    />
                    <Label htmlFor="margin">Include Margin</Label>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dark-color">Dark Color</Label>
                      <Input
                        id="dark-color"
                        type="color"
                        value={options.color.dark}
                        onChange={(e) => setOptions(prev => ({ 
                          ...prev, 
                          color: { ...prev.color, dark: e.target.value }
                        }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="light-color">Light Color</Label>
                      <Input
                        id="light-color"
                        type="color"
                        value={options.color.light}
                        onChange={(e) => setOptions(prev => ({ 
                          ...prev, 
                          color: { ...prev.color, light: e.target.value }
                        }))}
                      />
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            
            <Button
              variant="outline"
              size="sm"
              onClick={generateQRCode}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
        <Badge variant="secondary" className="w-fit">
          {employeeName}
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* QR Code Display */}
        <div className="flex justify-center p-4 bg-white rounded-lg border">
          {isLoading ? (
            <div className="flex items-center justify-center w-64 h-64">
              <RefreshCw className="h-8 w-8 animate-spin text-gray-400" />
            </div>
          ) : qrCodeDataUrl ? (
            <img
              src={qrCodeDataUrl}
              alt={`QR Code for ${employeeName} verification`}
              className="max-w-full h-auto"
              style={{ maxWidth: `${Math.min(options.size, 256)}px` }}
            />
          ) : (
            <div className="flex items-center justify-center w-64 h-64 text-gray-400">
              Failed to generate QR code
            </div>
          )}
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => downloadQRCode('png')}
            disabled={!qrCodeDataUrl}
          >
            <Download className="h-4 w-4 mr-2" />
            PNG
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => downloadQRCode('svg')}
            disabled={!qrCodeDataUrl}
          >
            <Download className="h-4 w-4 mr-2" />
            SVG
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => copyToClipboard(verificationUrl, 'Verification URL')}
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy URL
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={previewVerification}
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </div>

        {/* Verification URL Display */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Verification URL:</Label>
          <div className="p-2 bg-gray-50 rounded text-xs font-mono break-all">
            {verificationUrl}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
