/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Multi Bisnis & Produk',
    title: 'Multi Bisnis & Produk',
    text:
      'Satu akun dengan banyak bisnis dan produk bisa! Stop bikin banyak akun.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Setup Minimal',
    title: 'Setup Minimal',
    text:
      'Tanpa banyak pengaturan yang ribet. Anda fokus saja pada kualitas produk.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Reward',
    title: 'Reward',
    text:
      'Beri hadiah ke pelanggan biar lebih semangat memberikan saran ke produk Anda.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Retargeting',
    title: 'Retargeting',
    text:
      'Kirim notifikasi ke semua mantan pelanggan yang pernah memberikan saran.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Fitur Hebat"
          title="Membantu Bisnis Anda Berkembang"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
