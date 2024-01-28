"use strict";


const courses = [
    {
        img: './assets/image/iosImg.webp',
        title: 'IOS Development',
        description: 'რეგისტრაცია დასრულებულია',
    }
    ,
    {
        img: './assets/image/ReactImg.webp',
        title: 'React',
        description: 'რეგისტრაცია დასრულებულია',
    }
    ,
    {
        img: './assets/image/phytonimg.webp',
        title: 'Intro to Python',
        description: 'რეგისტრაცია დასრულებულია',
    }
    ,
    {
        img: './assets/image/advancedphyton.webp',
        title: 'Advanced Python',
        description:'რეგისტრაცია დასრულებულია'
    }
    ,
    {
        img: './assets/image/cyber.webp',
        title: 'Advanced Cyber course',
        description:'რეგისტრაცია დასრულებულია'
    }
    ,
    {
        img: './assets/image/ToT.webp',
        title: 'ToT - Training of trainers',
        description:'რეგისტრაცია დასრულებულია'
    }
    ,
    {
        img: './assets/image/Blockchain.webp',
        title: 'Blockchain',
        description:'რეგისტრაცია დასრულებულია'
    }
    ,
    {
        img: './assets/image/Devops.webp',
        title: 'DevOps',
        description:'რეგისტრაცია დასრულებულია'

    }
    ,
    {
        img: './assets/image/goverence.webp',
        title: 'Information Security Goverence',
        description:'რეგისტრაცია დასრულებულია'

    }

]
const tbcCouerses = document.querySelector('.tbcCoursesContainer');

courses.forEach(course => {
    const tbcCourse = document.createElement('div');
    tbcCourse.classList.add('course');
    tbcCourse.innerHTML = `
    <img src="${course.img}" alt="">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <a href=""><img src="./assets/image/arrowLeft.png" alt="">კურსის დეტალები</a>
    `;
    tbcCouerses.appendChild(tbcCourse);

})
