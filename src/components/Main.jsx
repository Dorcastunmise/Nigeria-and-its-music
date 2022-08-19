import React from "react";

function Main(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="main--title">Fun facts about Nigerian Music Industry</h1>
            <section className="main--facts">
            The music of Nigeria includes many kinds of folk and popular music, styles of <br></br>
            folk music are related to the multitudes of ethnic groups in the country,<br></br>
            each with their own techniques, instruments, and songs.<br></br>
            Little is known about the country's music history prior to European contact, <br></br>
            although bronze carvings dating back to the 16th and 17th centuries<br></br>
            have been found depicting musicians and their instruments.<br></br>
            The country's most internationally renowned genres are Indigenous,<br></br>
            Apala, Fuji, Jùjú, Afrobeat, Afrobeats, Igbo Highlife, Afro-juju,<br></br>
            Waka, Igbo rap, Yo-pop, Gospel.<br></br>
            The largest ethnic groups are the Igbo, Hausa and Yoruba. <br></br>
            Traditional music from Nigeria and throughout Africa is almost always functional;<br></br>
            in other words, it is performed to mark a ritual such as the wedding or funeral<br></br>
            and not to achieve artistic goals.<br></br>
            Although some Nigerians, especially children and the elderly,<br></br>
            play instruments for their own amusement, solo performance is otherwise rare.<br></br>
            Music is closely linked to agriculture, and there are restrictions on, <br></br>
            for example, which instruments can be played during different parts of <br></br>
            the growing season.<br></br>
            </section>
        </main>
    )
}
export default Main