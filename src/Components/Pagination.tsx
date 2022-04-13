import React, {useEffect, useState} from 'react';
import {TablePagination} from "@mui/material";//not clear how to import

export const Pagination = () => {
    const name = [
        'Jago Wormald1',
        'Saul Milne2',
        'Aariz Hester3',
        'Dion Reeve4',
        'Anisa Ortega5',
        'Blade Cisneros6',
        'Malaikah Phelps7',
        'Zeeshan Gallagher8',
        'Isobella Vo9',
        'Rizwan Mathis10',
        'Menaal Leach11',
        'Kian Walton12',
        'Orion Lamb13',
        'Faizah Huynh14',
        'Crystal Vaughan15',
        'Vivien Hickman16',
        'Stuart Lu17',
        'Karol Davison18',
        'Dario Burns19',
        'Chloe Rich20',
        'Martyna Felix',
        'Nida Glass',
        'Maeve Miles',
        'Hasnain Puckett',
        'Ayman Cano',
        'Safwan Perry',
        'Fox Kelly',
        'Louise Barlow',
        'Malaki Mcgill',
        'Leanna Cline',
        'Willard Hodge',
        'Amelia Dorsey',
        'Kiah Porter',
        'Jeanne Daly',
        'Mohsin Armstrong',
        'Laurie Rangel',
        'Princess Tierney',
        'Kasim Kendall',
        'Darryl Cope',
        'Elysha Ray',
        'Liyana Harris',
        'Kashif Blackburn',
        'Atif Zimmerman',
        'Sila Hartley',
        'Ralphie Hebert',
        'Rick Kane',
        'Finnlay Bentley',
        'Samia North',
        'Isaac Morton',
        'Lily-Ann Clifford',
        'Thalia Park',
        'Sapphire Cruz',
        'Cieran Vazquez',
        'Anya Estes',
        'Dominika Field',
        'Rosanna Chung',
        'Safiyah Davey',
        'Ryley Beasley',
        'Kalvin Trejo',
        'Evie-Mae Farrell',
        'Juliet Valencia',
        'Astrid Austin',
        'Lyle Montgomery',
        'Nisha Mora',
        'Kylie Callaghan',
        'Star Wilks',
        'Marissa Colley',
        'Asa Fuller',
        'Leigh Kemp',
        'Avleen Dawson',
        'Sammy Bonilla',
        'Acacia Becker',
        'Coral Shepherd',
        'Melina Molina',
        'Kiran Bailey',
        'Clara Escobar',
        'Alexandru Horn',
        'Brandon-Lee Mercado',
        'Elouise Weston',
        'King Long',
        'Kerri Searle',
        'Kanye Hamer',
        'Elwood Benitez',
        'Mikail Whitaker',
        'Bobby Hardy',
        'Talha Ferry',
        'Priscilla Landry',
        'Olivia-Grace Cain',
        'Kiaan Wallace',
        'Wesley Padilla90',
        'Ella-Grace Wooten91',
        'Kaif Molloy92',
        'Kamal Broadhurst93',
        'Bianca Ferrell94',
        'Micheal Talbot95',
    ];

    let newArr: Array<string>=[]
    let [resultArray, setResultArray]=useState<Array<string | null>>([])

    const [page, setPage]=useState(0)
    const [rowsPerPage, setRowsPerPage]=useState(10) // step 10.25.50.75.100
    console.log(rowsPerPage)
    // need to know event type: React.MouseEvent
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement>  | null, newPage:number)=>{
        setPage(newPage) // where did we declare newPage?
    }
    const handleChangeRowsPerPage = (event: React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>)=>{
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
    }

    const paginatorFoo = ()=>{
        for(let i=page*rowsPerPage; i<(page * rowsPerPage) + rowsPerPage; i++){
            newArr.push(name[i])
        }
        setResultArray(newArr)
    }

    useEffect(()=>{
        paginatorFoo()
    }, [page, rowsPerPage])

    return (
        <div>
            <div>
                {resultArray.map(m=>{
                    return <div>{m}</div>
                })}
            </div>
            <div style={{position: "absolute"}}>
                <TablePagination
                    component="div"
                    count={name.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>

        </div>
    );
};

