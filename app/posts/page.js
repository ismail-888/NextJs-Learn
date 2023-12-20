import Link from "next/link";


const PostsPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // cache:'force-cache' // ye3ni hone kani l component 3ibara 3an SSG
    // cache:'no-store' // hon sar l component SSR ye3ni kl ma zour haydi l saf7a 3m yerja3 ye3ml request marra teniye kerml jib l data
    next: {
      // hon serna bl ISG
      revalidate: 120, // hon ye3ni 2awal marra 7a ye3ml hal req la7 yjib l data w ybayn l component ye3ni sar hayda l component kelu sar cache w bas sir zouru mara tenye 7a ybayen bser3a w 7aydal hek la ba3d 120 seniye (7assab ana shu m7adad) w bas te5lass hal 120s byerja3 by3ml req marra teniye w biji l data iza ken fi te8yir wala la2
    },
  });
  const posts = await response.json();
  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}
      key={post.id}
        style={{
          width: "70%",
          background: "white",
          padding: "10px",
          borderRadius: "10px",
          color: "black",
          marginTop: "20px",
        }}
      >
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </Link>
    );
  });
 
  return (
    <div>
      <h1>posts page</h1>
      {/*  POSTS */}
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {postsJSX}
      </div>
      {/* End Posts */}
    </div>
  );
};

export default PostsPage;
