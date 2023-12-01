import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Thirana Embuldeniya</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          alias nemo impedit! Quidem dolorum voluptates voluptate dignissimos
          molestiae quos quibusdam similique laudantium commodi ipsam, maiores
          velit culpa! Asperiores doloribus ipsa quam ducimus, perspiciatis odio
          voluptas eos dolorem tempore numquam accusantium voluptate soluta
          eveniet beatae. Harum voluptates culpa numquam ducimus enim.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          mollitia repellat, voluptatum natus accusantium corrupti
          reprehenderit. Ut, enim. Incidunt, laboriosam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam at
          cumque perspiciatis officia qui inventore voluptas aspernatur quisquam
          voluptate iste?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
