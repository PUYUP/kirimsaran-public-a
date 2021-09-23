import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

import PublicLayout from '../components/public-layout';
import PublicNavbar from '../components/public-navbar';

export default function Index() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [user, setUser] = useState();

  useEffect(() => {
    if ('ks-user' in cookies) {
      const u = cookies['ks-user'];
      setUser(u);

      // router.replace('/account');
    } else {
      // router.replace('/public');
    }
  }, []);

  return (
    <>
      <div className="shadow overflow-hidden mx-5">
        <div className="px-4 py-4 bg-white">
          <div className="p-4 text-center">
            <p>Bantu pemilik usaha meningkatkan kualitas produk dengan saran dari Anda. Ambil hadiah dari mereka seperti diskon, free, dll.</p>

              {!user?.token &&
                <>
                  <button type="button" className="px-4 py-2 bg-green-300 mt-4 text-sm" onClick={() => router.push('/signin')}>
                    Masuk ke Akun
                  </button>

                  <p className="text-sm pt-5">Anda pemilik usaha?</p>
                  <a href="https://dashboard.kirimsaran.com" target="_blank" rel="noreferrer" className="text-blue-800 text-sm py-2 px-4 inline-block font-bold">Daftar Disini &rarr;</a>
                </>
              }

              {user?.token &&
                <>
                  <button type="button" className="px-4 py-2 bg-green-300 mt-4 text-sm" onClick={() => router.push('/account')}>
                    Riwayat Saran Saya &rarr;
                  </button>
                </>
              }
          </div>
        </div>
      </div>
    </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <PublicLayout>
      <PublicNavbar />
      {page}
    </PublicLayout>
  )
}