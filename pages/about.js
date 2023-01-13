import TwoColumn from 'components/two-column'
import Container from 'components/container'
import Hero from 'components/hero'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import Image from 'next/legacy/image'
import eyecatch from 'images/about.jpg'

export default function About () {
  return (
    <Container>
      <Hero title='About' subtitle='About development activities' />

      <figure>
        <Image
          src={eyecatch}
          alt=""
          layout='responsive'
          sizes='(min-width: 1152px) 1152px, 100vw'
          priority
        />
      </figure>

      <TwoColumn>
        <TwoColumn.Main>
          <PostBody>
            <p>
              Cubeが得意とする分野はものづくりです。３次元から２次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            ...
            <h3>新しいことへのチャレンジ</h3>
            <p>
              今までと違うのを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けています。
            </p>
          </PostBody>
        </TwoColumn.Main>

        <TwoColumn.Sidebar>
          <Contact />
        </TwoColumn.Sidebar>
      </TwoColumn>
    </Container>
  )
}
