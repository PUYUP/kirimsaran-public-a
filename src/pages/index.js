import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function PublicPage() {
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
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Kirim Saran" />
          <Banner />
          <KeyFeature />
          <ServiceSection />
          {/* <Feature /> */}
          {/* <CoreFeature /> */}
          <WorkFlow />
          <Package />
          {/* <TeamSection /> */}
          {/* <TestimonialCard /> */}
          {/* <BlogSection /> */}
          {/* <Subscribe /> */}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
