import { IconName } from "react-icons/ri";
const YEAR = new Date().getFullYear()

export default {
  github: "https://github.com/dan-hu",
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © 只是胡闹.
      <a href="/feed.xml">RSS</a>
      <RiDiscordFill />
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
