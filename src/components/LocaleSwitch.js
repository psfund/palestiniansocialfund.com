/* This example requires Tailwind CSS v2.0+ */
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const options = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "العربية",
    locale: "ar",
    dir: "rtl",
  },
];

export default function LocaleSwitch() {
  const router = useRouter();
  const { locale } = router;
  const [selected, setSelected] = useState(locale);

  useEffect(() => {
    const o = options.find((o) => o.locale === selected);

    if (o.dir === "rtl") {
      document.querySelector("body").dir = "rtl";
    } else {
      document.querySelector("body").dir = "ltr";
    }

    router.push(router.pathname, router.pathname, { locale: o.locale });
  }, [selected]);

  return (
    <div>
      <label
        htmlFor="locale"
        className="block text-sm font-medium text-gray-700 hidden"
      >
        Locale
      </label>
      <select
        id="locale"
        name="locale"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.locale} value={o.locale}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}
