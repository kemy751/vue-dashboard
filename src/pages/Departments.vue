<template>
    <section>
       <h2>Departments</h2>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Department Name</th>
                    <th>Number of employees</th>
                    <th>Designations</th>
                    <th>Action</th>
                </tr>
                    <tr>
                        <td>D01</td>
                        <td>Human Resource</td>
                        <td>3</td>
                        <td>Human Resource Manager<br/>Secretary</td>
                        <td class="action">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>D02</td>
                        <td>IT</td>
                        <td>20</td>
                        <td>Project Manager<br/>Systems Analyst</td>
                        <td class="action">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>D03</td>
                        <td>Human Resource</td>
                        <td>3</td>
                        <td>Human Resource Manager<br/>Secretary</td>
                        <td class="action">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>  
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </td>
                    </tr>
            </table>
    </section>
</template>
<style scoped>
section {
    display: grid;
    grid-template-columns: 1fr;
}

section h2 {
    margin-top: 1rem;
}

section table {
    width: 100%;
    border-radius: var(--card-border-radius);
    padding: var(--card-padding);
    border: 0.07rem solid rgba(88, 88, 88, 0.532);
    color: black;
}

section table tr th {
    text-align: center;
    font-size:0.9rem;
}

section table tr td {
    text-align: center;
    border: none;
}

section table tr .action i{
    font-size: 1rem;
    margin-left:0.5rem;
    color:red;
}
section table tr .suspend span {
    padding: 0.3rem;
    color: red;
    font-size: 0.7rem;
}

section table tr .active span {
    padding: 0.3rem;
    color: skyblue;
    font-size: 0.7rem;
}
</style>