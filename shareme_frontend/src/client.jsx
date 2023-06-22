import  sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId:'d1ba0nrk',
    dataset: 'production',
    apiVersion:'2021-11-16',
    useCdn:true, //allows use to quickly show images
    token:'skggXhP8Q4SWt99dHoQ4Eb1XPi2qiBmVBtz83ZXr67UP14nXGrBXmJKiTW91v3dY5QTPQb4aBfA0WLecMCbtMmG4fpNU5nUpNRokg7l4RPrmOtpdGXyg3cQzo0lgmyMHE3wLLQCQhoOy21QqOH4S4C8A7I6qeW1wOg43Yj2utOa4plaCNdGb'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)