import { Post, PostProps } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: (PostProps & { id: number })[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/luissimas.png",
      name: "LuÃ­s Simas",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa ð",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      {
        type: "link",
        content: "ð jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-10-08 10:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/folke.png",
      name: "Folke",
      role: "Plugin Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa ð",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. Ã um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto Ã© DoctorCare ð",
      },
      {
        type: "link",
        content: "ð jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-10-06 08:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
