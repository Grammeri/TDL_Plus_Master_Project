import React, {useEffect, useState} from 'react';
import {TablePagination} from "@mui/material";

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
    // здесь хранится наша порция
    let newArr: Array<string> = []
    // здесь хранится наша порция
    let [resultArray, setResultArray] = useState<Array<string | null>>([])

    const [page, setPage] = React.useState(0); // нулевая порция (с 1-11)
    const [rowsPerPage, setRowsPerPage] = React.useState(10); // в порции 10 котлет
    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    //  2------------даю новую порцию для отрисовки
    const paginatorFoo = () => {
        //         2порция * из10котлет=20   20< (2*10)+10
        //        i=20  ;   20<30  -т.е. дай мне с 20 по 30 ; давай вперед пока не станет 30
        for (let i = page * rowsPerPage; i < (page * rowsPerPage) + rowsPerPage; i++) {
            newArr.push(name[i]) // заливаем нашу порцию во временный массив
            // т.к. в форе useState не работает
        }
        // console.log(newArr)
        // а теперь выйдя из фора, мы можем использовать useState
         setResultArray(newArr) // массив с залитой порцией переливаем в хук useState( resultArray )
    }

    //  1------------если поменяется [page или rowsPerPage] вызывай функцию   paginatorFoo()
    useEffect(() => {
        paginatorFoo()
    }, [page, rowsPerPage])


    return (
        <div style={{margin: '20px'}}>
            {resultArray.map(el => {
                return (
                    <div>{el}</div>
                )
            })}
            <TablePagination
                component="div"
                count={name.length} //ранее было 100, мы убрали хардкод, зависим от длинны списка
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
};

