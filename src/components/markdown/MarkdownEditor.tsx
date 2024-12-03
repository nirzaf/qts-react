import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Tab } from '@headlessui/react';

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function MarkdownEditor({ value, onChange, className = '' }: MarkdownEditorProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex border-b border-gray-200">
          <Tab
            className={({ selected }) =>
              `px-4 py-2 text-sm font-medium border-b-2 focus:outline-none ${
                selected
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }
          >
            Write
          </Tab>
          <Tab
            className={({ selected }) =>
              `px-4 py-2 text-sm font-medium border-b-2 focus:outline-none ${
                selected
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`
            }
          >
            Preview
          </Tab>
        </Tab.List>
        <Tab.Panels className="p-4">
          <Tab.Panel>
            <textarea
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full h-96 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your content in Markdown..."
            />
          </Tab.Panel>
          <Tab.Panel className="prose max-w-none h-96 overflow-y-auto">
            <ReactMarkdown>{value}</ReactMarkdown>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
