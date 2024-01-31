import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchBranches } from '../../../slices/BranchSlice';
import { useDispatch } from 'react-redux';

import './home.css'




function Branches({ EditBranch, DeleteBranch }) {
    const dispatch = useDispatch();
    const Branches = useSelector((state) => state.branches);
    // declaring states and variables
    const [currentpage, setcurrentpage] = useState(1);
    const [itemsperpage, setitemsperpage] = useState(5);
    const [records, setrecords] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [npages, setNpages] = useState(0);

    useEffect(() => {
        dispatch(fetchBranches());
    }, [dispatch]);

    useEffect(() => {
        x();
    }, [itemsperpage, currentpage, Branches.data]);

    function x() {
        if (Branches.loading) return <div>loading....</div>;
        if (!Branches.loading && Branches.data) {
            const lastIndex = currentpage * itemsperpage;
            const firstIndex = lastIndex - itemsperpage;
            setrecords(Branches.data.slice(firstIndex, lastIndex));
            setitemsperpage(Number(itemsperpage));
            // number of pages
            const npages = Math.ceil(Branches.data.length / itemsperpage);
            setNpages(npages);
            // numbers to be displayed and clickable
            let numbers = [...Array(npages + 1).keys()].slice(1);

            // slicing the whole array and display those some page number array elements
            if (npages > 8) {
                if (npages >= currentpage + 8) {
                    numbers = numbers.slice(currentpage - 1, currentpage + 7);
                } else {
                    numbers = numbers.slice(npages - 8, npages);
                }
            }
            setNumbers(numbers);
        }
    }
    // handle previous
    function prepage() {
        if (currentpage !== 1) {
            setcurrentpage(currentpage - 1);
        }
    }
    // handle clicking numbers and change
    function changepage(id) {
        setcurrentpage(id);
    }
    // handles next page button
    function nextpage() {
        if (currentpage !== npages) {
            setcurrentpage(currentpage + 1);
        }
    }
    return (
        <div>
            {Branches.data ?
                <div className='shadow'>

                    <table className='table table-bordered-bottom '>
                        <thead>
                            <tr>
                                <th >Branch ID</th>
                                <th>Branch Name</th>
                                <th className="text-info">Edit</th>
                                <th className="text-info">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {records &&
                                records.map((branch, i) => (
                                    <tr key={i} className='table-row'>
                                        <td>{branch.branchId}</td>
                                        <td>{branch.name}</td>
                                        <td><a href="#" className="text-warning" onClick={() => EditBranch(branch)}> Edit</a></td>
                                        <td><a href="#" className="text-danger" onClick={() => DeleteBranch(branch)} > Delete</a></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    <nav>
                        <ul className='pagination bg-info'>
                            <div class="mx-3">
                                <label htmlFor="itemsperpage">Items Per Page:</label>
                                <select id="itemsperpage" name="itemsperpage" value={itemsperpage}
                                    onChange={(e) => {
                                        setitemsperpage(e.target.value)
                                        setcurrentpage(1)
                                    }} required>
                                    <option value="5">5 </option>
                                    <option value="10">10</option>
                                    <option value="15">15</option>
                                    <option value="20">20</option>
                                </select>
                            </div>
                            {/* previous page link */}
                            <li className='page-item'>
                                <a href='#' id='prev' className='page-link' onClick={prepage}>
                                    Prev
                                </a>
                                {/* numbers page links */}
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item ${currentpage === n ? 'active' : ''}`} key={i}>
                                        <a href='#' className='page-link table-row'
                                            onClick={() => changepage(n)}>{n}</a>
                                    </li>
                                ))
                            }
                            {/* next page link */}
                            <li className='page-item'>
                                <a href='#' id='next' className='page-link'
                                    onClick={nextpage}>
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div> : <p>Loading....</p>}

        </div>
    )
}
export default Branches