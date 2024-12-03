import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ReactMarkdown from 'react-markdown';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function MarkdownEditor({ value, onChange, className = '' }: MarkdownEditorProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={`${className} w-full`}>
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
              ${selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              }`
            }
          >
            Write
          </Tab>
          <Tab
            className={({ selected }) =>
              `w-full rounded-lg py-2.5 text-sm font-medium leading-5 
              ${selected
                ? 'bg-white text-blue-700 shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
              }`
            }
          >
            Preview
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2">
          <Tab.Panel className="rounded-xl bg-white p-3">
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-96 p-2 border rounded-md font-mono"
              placeholder="Write your markdown content here..."
            />
          </Tab.Panel>
          <Tab.Panel className="rounded-xl bg-white p-3">
            <div className="prose max-w-none h-96 overflow-y-auto">
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
