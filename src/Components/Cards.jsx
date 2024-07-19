import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    console.log(props.category);
    console.log(props.courses);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    function getCourses() {
        if (!props.courses) {
            return [];
        }
        if (category === "All"|| category.length === 0) {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        }
        else
        {
            return props.courses[category]||[];
        }
    }
    const courseList = getCourses();

    if (courseList.length === 0) {
        return <div>No courses available</div>;
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                courseList.map((course) => (
                    <Card 
                        course={course} 
                        key={course.id} 
                        likedCourses={likedCourses} 
                        setLikedCourses={setLikedCourses} 
                    />
                ))
            }
        </div>
    );
};

export default Cards;