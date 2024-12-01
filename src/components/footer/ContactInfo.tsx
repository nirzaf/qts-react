import React from 'react';

export const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-[#000000] mb-4">Contact</h3>
      <ul className="space-y-3">
        <li className="text-[#000000]/70 text-sm">
          19/2/9, Market Complex,<br />
          Matale Road, Akurana,<br />
          Kandy: 20850
        </li>
        <li>
          <a href="tel:+94814242615" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
            +94 81 424 2615
          </a>
        </li>
        <li>
          <a href="mailto:info@quadrate.lk" className="text-[#000000]/70 hover:text-[#000000] transition-colors duration-200">
            info@quadrate.lk
          </a>
        </li>
      </ul>
    </div>
  );
}; 