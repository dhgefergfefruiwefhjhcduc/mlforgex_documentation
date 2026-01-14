
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function VersionSelector({ className = '' }) {
  const router = useRouter();
  const pathname = usePathname();
  const ver = pathname ? pathname.split('/').filter(Boolean).pop() : '';
  const versions = [
    { id: 'v1.1.1', label: 'v1.1.1', path: '/v1.1.1' },
    { id: 'v1.1.0', label: 'v1.1.0', path: '/v1.1.0' },
  ];

  const initial = versions.find((v) => pathname?.startsWith(v.path))?.id ?? versions[0].id;
  const [selected, setSelected] = useState(initial);

  useEffect(() => {
    const match = versions.find((v) => pathname?.startsWith(v.path));
    if (match) setSelected(match.id);
  }, [pathname]);

  const onChange = (e) => {
    const id = e.target.value;
    const v = versions.find((x) => x.id === id);
    if (v) {
      router.push(v.path);
    }
    setSelected(id);
  };

  return (
    <div className={`flex items-center ${className} cursor-pointer`}>
      <label className="sr-only">Select version</label>
      <select
        value={selected}
        onChange={onChange}
        className="border border-gray-200 rounded-md px-2 py-1 text-sm bg-white ml-2"
        aria-label="Select documentation version"
      >
        {versions.map((v) => (
          <option key={v.id} value={v.id}>{v.label}</option>
        ))}
      </select>
    </div>
  );
}
