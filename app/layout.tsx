import '@/styles/dist.css';
import React from 'react';
import AddressBar from '@/ui/AddressBar';
import GlobalNav from './GlobalNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Turbopack Example</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">
        <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
          <div className="col-start-2">
            <GlobalNav />
          </div>

          <div className="col-start-3 space-y-6">
            <AddressBar />
            <div className="rounded-xl border border-zinc-800 bg-black p-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
