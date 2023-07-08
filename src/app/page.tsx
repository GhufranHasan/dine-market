import Wrapper from './components/shared/wrapper'
import MainPage from './components/home'

export default function Home() {
  return (
    <div className="font-menu bg-white text-black">
      <Wrapper>
        <main>
          <MainPage />
        </main>
      </Wrapper>
    </div>
  )
}