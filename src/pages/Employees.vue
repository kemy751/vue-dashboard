<template>
    <section>
        <h2>Employees Table</h2>
        <!-- <div class=""> -->
            <div class="button">
                <button>Add New Employees</button>
            </div>
        <table>
            <tr>
                <th>Employee Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Email Address</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            <tr>
                <td>U01</td>
                <td>Kemigisha</td>
                <td>Michelle</td>
                <td>Human Resource Manager</td>
                <td>Human Resource</td>
                <td>kemigishamichelle77@gmail.com</td>
                <td>0755636943</td>
                <td>Kawuuku</td>
                <td class="suspend"><span>Inactive</span></td>
                <td class="action">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td>U02</td>
                <td>Namara</td>
                <td>Megan</td>
                <td>Software Engineer</td>
                <td>IT</td>
                <td>megan1@gmail.com</td>
                <td>0755636943</td>
                <td>Kololo</td>
                <td class="active"><span>Active</span></td>
                <td class="action">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td>U03</td>
                <td>Nasimbwa</td>
                <td>Angel</td>
                <td>Teller</td>
                <td>Accounts</td>
                <td>angel77@gmail.com</td>
                <td>0751234567</td>
                <td>Bugonga</td>
                <td class="active"><span>Active</span></td>
                <td class="action">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </td>
            </tr>
            <tr>
                <td>U01</td>
                <td>Kemigisha</td>
                <td>Michelle</td>
                <td>Human Resource Manager</td>
                <td>Human Resource</td>
                <td>kemigishamichelle77@gmail.com</td>
                <td>0755636943</td>
                <td>Kawuuku</td>
                <td class="suspend"><span>Inactive</span></td>
                <td class="action">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i class="fa fa-eye" aria-hidden="true"></i>
                </td>
            </tr>
        </table>
        <!-- </div> -->
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

section .button button{
padding:1rem;
border-radius:10px;
background:rgba(1, 1, 52, 0.922);
color:white;
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
}

section table tr td {
    text-align: center;
    border: none;
}

section table tr .suspend span {
    padding: 0.3rem;
    color: red;
    font-size: 0.7rem;
    font-weight: bold;
}

section table tr .active span {
    padding: 0.3rem;
    color: skyblue;
    font-size: 0.7rem;
    font-weight: bold;
}
section table tr .action i{
    font-size: 1rem;
    margin-left:0.5rem;
    color:red;
}
</style>