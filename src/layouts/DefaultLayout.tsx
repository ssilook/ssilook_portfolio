import Header from '@/components/layouts/Header'
import Container from '@/components/layouts/Container'

function DefaultLayout() {
  return (
    <>
      <div className="w-full">
        <Header />
        <Container />
      </div>
    </>
    
  )
}

export default DefaultLayout