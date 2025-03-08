import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from '../../../../public/sitebar.png'
import "./bar.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = ["Status", "Price", "Collections", "Chains", "Categories"];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {sections.map((section) => (
        <div key={section} className="section">
          <button className="section-header" onClick={() => toggleSection(section)}>
            {section}
            <ChevronDown className={`chevron ${openSections[section] ? "rotated" : ""}`} />
          </button>

          {openSections[section] && <div className="section-content">Content for {section}</div>}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
