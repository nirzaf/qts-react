# QTS React Color Palette

## Base Colors

### Light Theme

- `--background: #FFFFFF` (HSL: 0 0% 100%)
  - Primary background color for light theme, used for main content areas
  
- `--foreground: #0A0A0B` (HSL: 240 10% 3.9%)
  - Primary text color for light theme
  
- `--primary: #1A1A1A` (HSL: 240 5.9% 10%)
  - Primary brand color, used for main actions and emphasis
  
- `--primary-foreground: #FAFAFA` (HSL: 0 0% 98%)
  - Text color on primary colored backgrounds

  - Tailwind

{ 'chrysler_blue': { DEFAULT: '#0607E1', 100: '#01012d', 200: '#02025a', 300: '#030386', 400: '#0505b3', 500: '#0607e1', 600: '#2424f9', 700: '#5b5bfb', 800: '#9292fc', 900: '#c8c8fe' }, 'black': { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 'federal_blue': { DEFAULT: '#00045C', 100: '#000112', 200: '#000225', 300: '#000337', 400: '#000449', 500: '#00045c', 600: '#0009af', 700: '#0411ff', 800: '#5860ff', 900: '#abb0ff' }, 'black': { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 'blue': { DEFAULT: '#1304F9', 100: '#040132', 200: '#080264', 300: '#0c0297', 400: '#1003c9', 500: '#1304f9', 600: '#4336fc', 700: '#7268fd', 800: '#a19bfd', 900: '#d0cdfe' } }

- CSV

0607E1,000000,00045C,000000,1304F9

- With #

#0607E1, #000000, #00045C, #000000, #1304F9

- Array

["0607E1","000000","00045C","000000","1304F9"]

- Object

{"Chrysler blue":"0607E1","Black":"000000","Federal blue":"00045C","Black 2":"000000","Blue":"1304F9"}

- Extended Array

[{"name":"Chrysler blue","hex":"0607E1","rgb":[6,7,225],"cmyk":[97,97,0,12],"hsb":[240,97,88],"hsl":[240,95,45],"lab":[28,71,-97]},{"name":"Black","hex":"000000","rgb":[0,0,0],"cmyk":[0,0,0,100],"hsb":[0,0,0],"hsl":[0,0,0],"lab":[0,0,0]},{"name":"Federal blue","hex":"00045C","rgb":[0,4,92],"cmyk":[100,96,0,64],"hsb":[237,100,36],"hsl":[237,100,18],"lab":[8,35,-50]},{"name":"Black","hex":"000000","rgb":[0,0,0],"cmyk":[0,0,0,100],"hsb":[0,0,0],"hsl":[0,0,0],"lab":[0,0,0]},{"name":"Blue","hex":"1304F9","rgb":[19,4,249],"cmyk":[92,98,0,2],"hsb":[244,98,98],"hsl":[244,97,50],"lab":[32,77,-105]}]

- XML

<palette>
  <color name="Chrysler blue" hex="0607E1" r="6" g="7" b="225" />
  <color name="Black" hex="000000" r="0" g="0" b="0" />
  <color name="Federal blue" hex="00045C" r="0" g="4" b="92" />
  <color name="Black" hex="000000" r="0" g="0" b="0" />
  <color name="Blue" hex="1304F9" r="19" g="4" b="249" />
</palette>

### Dark Theme

- `--background: #0A0A0B` (HSL: 240 10% 3.9%)
  - Primary background color for dark theme
  
- `--foreground: #FAFAFA` (HSL: 0 0% 98%)
  - Primary text color for dark theme

## Accent Colors

- `--accent: #F4F4F5` (HSL: 240 4.8% 95.9%)
  - Used for subtle highlights and hover states
  
- `--accent-foreground: #1A1A1A` (HSL: 240 5.9% 10%)
  - Text color on accent backgrounds

## UI Elements

- `--muted: #F4F4F5` (HSL: 240 4.8% 95.9%)
  - Used for secondary or less prominent content
  
- `--muted-foreground: #71717A` (HSL: 240 3.8% 46.1%)
  - Text color for muted elements

- `--card: #FFFFFF` (HSL: 0 0% 100%)
  - Background color for card components
  
- `--card-foreground: #0A0A0B` (HSL: 240 10% 3.9%)
  - Text color for card content

## Interactive Elements

- `--destructive: #EF4444` (HSL: 0 84.2% 60.2%)
  - Used for error states and destructive actions
  
- `--destructive-foreground: #FAFAFA` (HSL: 0 0% 98%)
  - Text color on destructive backgrounds

- `--border: #E4E4E7` (HSL: 240 5.9% 90%)
  - Color for borders and dividers
  
- `--input: #E4E4E7` (HSL: 240 5.9% 90%)
  - Color for form input borders

## Link Colors

- `#646CFF`
  - Primary link color
  
- `#535BF2`
  - Link hover color
  
- `#747BFF`
  - Secondary link color (light theme)

## Brand Accent Colors

- Tailwind

{ 'chrysler_blue': { DEFAULT: '#0607E1', 100: '#01012d', 200: '#02025a', 300: '#030386', 400: '#0505b3', 500: '#0607e1', 600: '#2424f9', 700: '#5b5bfb', 800: '#9292fc', 900: '#c8c8fe' }, 'black': { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 'federal_blue': { DEFAULT: '#00045C', 100: '#000112', 200: '#000225', 300: '#000337', 400: '#000449', 500: '#00045c', 600: '#0009af', 700: '#0411ff', 800: '#5860ff', 900: '#abb0ff' }, 'black': { DEFAULT: '#000000', 100: '#000000', 200: '#000000', 300: '#000000', 400: '#000000', 500: '#000000', 600: '#333333', 700: '#666666', 800: '#999999', 900: '#cccccc' }, 'blue': { DEFAULT: '#1304F9', 100: '#040132', 200: '#080264', 300: '#0c0297', 400: '#1003c9', 500: '#1304f9', 600: '#4336fc', 700: '#7268fd', 800: '#a19bfd', 900: '#d0cdfe' } }

- CSV

0607E1,000000,00045C,000000,1304F9

- With #

#0607E1, #000000, #00045C, #000000, #1304F9

- Array

["0607E1","000000","00045C","000000","1304F9"]

- Object

{"Chrysler blue":"0607E1","Black":"000000","Federal blue":"00045C","Black 2":"000000","Blue":"1304F9"}

- Extended Array

[{"name":"Chrysler blue","hex":"0607E1","rgb":[6,7,225],"cmyk":[97,97,0,12],"hsb":[240,97,88],"hsl":[240,95,45],"lab":[28,71,-97]},{"name":"Black","hex":"000000","rgb":[0,0,0],"cmyk":[0,0,0,100],"hsb":[0,0,0],"hsl":[0,0,0],"lab":[0,0,0]},{"name":"Federal blue","hex":"00045C","rgb":[0,4,92],"cmyk":[100,96,0,64],"hsb":[237,100,36],"hsl":[237,100,18],"lab":[8,35,-50]},{"name":"Black","hex":"000000","rgb":[0,0,0],"cmyk":[0,0,0,100],"hsb":[0,0,0],"hsl":[0,0,0],"lab":[0,0,0]},{"name":"Blue","hex":"1304F9","rgb":[19,4,249],"cmyk":[92,98,0,2],"hsb":[244,98,98],"hsl":[244,97,50],"lab":[32,77,-105]}]

- XML

<palette>
  <color name="Chrysler blue" hex="0607E1" r="6" g="7" b="225" />
  <color name="Black" hex="000000" r="0" g="0" b="0" />
  <color name="Federal blue" hex="00045C" r="0" g="4" b="92" />
  <color name="Black" hex="000000" r="0" g="0" b="0" />
  <color name="Blue" hex="1304F9" r="19" g="4" b="249" />
</palette>
