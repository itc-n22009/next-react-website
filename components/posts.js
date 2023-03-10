import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Posts ({ posts }) {
  console.log(posts)
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`} legacyBehavior>
            <a>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  sizes='(min-width: 1125px) 576px, 50vw'
                  placeholder='blur'
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </a>
          </Link>
        </article>
      ))}
    </div>
  )
}
