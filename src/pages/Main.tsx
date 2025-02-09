import { Layout } from '@/components/Layout'
import { getSubdomain } from '@/lib/utils'
import { Home } from '@/pages/Home'
import { Website } from '@/pages/Website'

const subdomain = getSubdomain()

export const Main = () => {
  if (subdomain) {
    return <Website />
  }

  return (
    <Layout>
      <Home />
    </Layout>
  )
}
