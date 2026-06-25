import { NavLink } from "react-router-dom";

const Resources = () => {
  const resources = [
    { path: "/resources/bgchanger", text: "Background Changer" },
    { path: "/resources/passwordgenerator", text: "Password Generator" },
    { path: "/resources/counter", text: "Counter" },
    { path: "/resources/currencyconverter", text: "Currency Converter" },
  ];
  return (
    <div className="min-h-full">
      <h1>Resources Portal</h1>
      <ul className="text-gray-500 font-medium">
        {resources.map((resource) => (
          <li className="mb-4" key={resource.text}>
            <NavLink to={resource.path} className="hover:underline">
              {resource.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
