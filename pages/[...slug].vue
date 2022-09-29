<template>
  <div class="post" v-if="data">
    <h1 class="title mt-3" v-html="data.title"></h1>
    <div class="post-meta">
      <span class="date me-1">{{ formatDate(data.created_at) }}</span>
    </div>
    <div class="post-content mt-2" v-html="data.description"></div>
  </div>
</template>
<script setup>
const route = useRoute();
let data;
if (route.params.slug) {
  let slugArr = route.params.slug;
  let slug = '';
  let domain = '';
  //check id is array or not
  if (Array.isArray(slugArr)) {
    domain = slugArr[0];
    slug = slugArr[1];
  }

  // console.log(id);
  const apiUrl = `https://${domain}/api/post/getBlogBySlug?slug=${slug}`;
  const response = await fetch(apiUrl);
  const json = await response.json();
  // console.log(json);

  let meta = [];
  if (json.code == 1) {
    data = json['data'];
    const metaData = {};
    //convert properties from yoast_head_json to array

    // console.log(route);

    metaData.title = data.title;
    metaData.og_image = data.image;
    metaData.description = '';
    metaData.url = route.fullPath;

    let metaTags = [
      {
        property: "og:image",
        content: metaData.og_image,
      },
      {
        property: "og:image:width",
        content: "600",
      },
      {
        property: "og:image:height",
        content: "300",
      },
      {
        property: "og:image:type",
        content: "website",
      },
      {
        property: "og:title",
        content: metaData.title,
      },
      {
        property: "og:url",
        content: metaData.url,
      }
    ];
    meta.push(...metaTags);
    // console.log(meta);
    // console.log(metaData);

    useHead({
      title: metaData?.title,
      meta: [
        ...meta
      ],
      link: [
        { rel: "icon", sizes: "32x32", href: "/_nuxt/assets/img/32x32.png" },
        { rel: "icon", sizes: "192x192", href: "/_nuxt/assets/img/192x192.png" },
        { rel: "apple-touch-icon", href: "/_nuxt/assets/img/180x180.png" },
      ],
    });
  } else {
    throw { statusCode: 404, message: "Post not found" };
  }
}

const formatDate = function (date) {
  let d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};
</script>
<style scoped>
.post-content img {
  max-width: 100%;
}
</style>
