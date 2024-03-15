<template>
    <div class="table_container">
        <div>
            <h3>Data Table</h3>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>28</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jane Doe</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jake Doe</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Will Smith</td>
                    <td>33</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Kylian Murphy</td>
                    <td>35</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Mike O'Hearn</td>
                    <td>31</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        name: 'DataTable-component'
    }

</script>

<style scoped>
    .table_container {
        width: 100%;
        padding: 20px 120px;
        box-sizing: border-box;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        border: 2px solid #000000;
    }
    th, td {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
        box-sizing: border-box;
    }
    th{
        background-color: #00000087;
        color: white;
    
    }
    tr:nth-child(odd) {
        background-color: #ffffff;
    }
    tr:nth-child(even) {
        background-color: #dddddd97;
    }

    @media only screen and (max-width: 768px) {
        .table_container {
            padding: 20px 40px;
        }
    }
</style>