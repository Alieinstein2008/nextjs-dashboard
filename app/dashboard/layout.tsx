import SideNav from '@/app/ui/dashboard/sidenav';

//Comentando porque a pré-renderização parcial não é suportada pelo vercel, gerando erro de implatação
//export const experimental_pprt = true;
<<<<<<< HEAD
//deploy na vercel!
=======

>>>>>>> b524589e3bbb108e0f7ba69e33c9ccace4757e10
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
