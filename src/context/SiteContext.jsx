import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/sanity";

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);
  const [benefits, setBenefits] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `{
          "settings": *[_type == "siteSettings"][0],
          "benefits": *[_type == "benefit"] | order(order asc),
          "pricing": *[_type == "pricing"] | order(order asc)
        }`;
        const data = await client.fetch(query);

        if (data.settings) setSettings(data.settings);
        if (data.benefits.length > 0) setBenefits(data.benefits);
        if (data.pricing.length > 0) setPricing(data.pricing);
      } catch (error) {
        console.error("Sanity global fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <SiteContext.Provider value={{ settings, benefits, pricing, loading }}>
      {children}
    </SiteContext.Provider>
  );
};

export const useSiteData = () => useContext(SiteContext);
