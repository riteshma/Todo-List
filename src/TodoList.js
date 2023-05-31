import React, { useState } from 'react'


const TodoList = () => {
    const [activty, setActivity] = useState('');
    const [listData, setListData] = useState([]);
    const [editId, setEditId] = useState(0);

    function addActivity() {
        // setlistData([...listData, activity])
        // console.log(listData)
        if (activty !== " "){
            setListData((listData) => {
                const updatedList = [...listData, activty]
                // console.log(updatedList)
                setActivity('');
                return updatedList
            })
        } else if(activty){
            setListData(
                listData.map((elem)=>{
                    if(elem.id === editId){
                        return{...elem, id: activty}
                    }
                    return elem;
                })
            )
        }
       

        
      

    }

    function removeActivity(i) {
        const updatedListData = listData.filter((elem, id) => {
            return i !== id;
        })
        setListData([...updatedListData]);
    }
    function editActivity(i) {
        const newEditElem = listData.find((elem, id) => {
            return i === id;
        });
        console.log(newEditElem)
        setActivity(newEditElem);
        setEditId(i);
    }
    function removeAll() {
        setListData([]);
    }
    return (
        <>
            <div className='container'>
                <h1 className='header'>Todo List</h1>
                <div className="input-group flex-nowrap">
                    <input type="text" value={activty} className="form-control" placeholder="Add Activity" onChange={(e) => setActivity(e.target.value)} />
                    <button type="button" class="btn btn-primary" onClick={addActivity}>Add</button>
                </div>
                <h3 className='list' >Here is your list <i class="fa-sharp fa-solid fa-arrow-down"></i></h3>
                {
                    listData !== [] && listData.map((item, i) => {
                        return (

                            <>
                                <p className='flex-nowrap' key={i} >
                                    <div class="input-group mb-3">
                                        <input type="text" value={item} class="form-control" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn btn-outline-danger" type="button" onClick={() => removeActivity(i)} >Remove</button>
                                        <button type="button" class="btn btn-outline-success" onClick={() => editActivity(i)} >Edit</button>
                                    </div>
                                </p>
                            </>
                        )
                    })
                }
                {listData.length >= 1 && <button type="button" class="btn btn-danger" onClick={removeAll} >Remove all</button>}
            </div>



        </>
    )
}

export default TodoList