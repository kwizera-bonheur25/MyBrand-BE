import path from "path";

const imagePath = path.resolve(__dirname, 'download.jpeg');

export const blogData = {
    title:"Lorem Ipsum - 32All the facts - Lipsum generator",
    content:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    image: imagePath
}

export const queryData = {
    email: "kdot@gmail.com",
    message: "This blog is awesome"
};

export const userData = {
    firstname:"KANYEMERA",
    lastname:"Placide",
    email:"Kanye@gmail.com",
    password:"kanyemera"
}

export const loginData = {
    email:"Kanye@gmail.com",
    password:"kanyemera"
}

export const commentData = {
    content:"This blog is awesome put more effort"
}
