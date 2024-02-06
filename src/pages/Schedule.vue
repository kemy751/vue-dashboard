<template>
    <div class="main">
        <div class="announcements">
            <h2>Announcements</h2>
            <div class="annou">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
            </div>
        </div>
        <div class="schedule">
            <h2>Schedule</h2>
            <div class="sch">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>25/02/2023</p>
            </div>
            <div class="sch">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>25/02/2023</p>
            </div>
            <div class="sch">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>25/02/2023</p>
            </div>
            <div class="sch">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>25/02/2023</p>
            </div>
            <div class="sch">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident commodi, esse eius veritatis adipisci
                    aliquid? Totam architecto iste voluptates voluptatem harum, dolor ut laboriosam quasi dicta in autem
                    officiis excepturi.
                </p>
                <p>25/02/2023</p>
            </div>
        </div>

    </div>
</template>
<style scoped>
.main {
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1rem;
}

.main .announcements {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    border: 1px solid rgb(239, 233, 233);
}
.main .announcements h2{
    text-align:center;
}
.main .announcements p{
    margin:1rem;
}
.main .schedule {
    padding: var(--card-padding);
    border-radius: var(--card-border-radius);
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    border: 1px solid rgb(239, 233, 233);
}

.main .schedule h2 {
    text-align: center;
}

.main .schedule .sch {
    padding: var(--card-padding);
    border-radius: 30px;
    margin-top: 1rem;
    box-shadow: var(--box-shadow);
    border: 1px solid rgb(239, 233, 233);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

}
</style>