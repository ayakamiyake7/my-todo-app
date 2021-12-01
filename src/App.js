import React from 'react'
import './style.css'

const App = () => {
    
    return (
        <>
            <div className="input_area">
                <input type="text" placeholder="New list"/>
                <button>Add</button>
            </div>

            <div className="list_area">
                <div className="tab_menu">
                    <p data-tab-target="all" className="tab_menu--title active">All</p>
                    <p data-tab-target="incomplete" className="tab_menu--title">Incomplete</p>
                    <p data-tab-target="inprogress" className="tab_menu--title">In progress</p>
                    <p data-tab-target="complete" className="tab_menu--title">Complete</p>
                </div>

                {/* {document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.addEventListener('click', () => {
                        console.log('click!');
                        const target = document.querySelector('.tab_menu--title')
                        target.classList.add('active')
                    })

                }    
                )} */}
                {/* {tabs.forEach(tab => {
                    // tab.addEventListener('click', () => { 
                    //     console.log('click!');
                    //     const target = document.querySelector(tab.dataset.tabTarget)
                    //     target.classList.add('active')
                    //     // for(let i = 0; i < tabs.length; i++) {
                    //     //     tabs[i].addEventListener('click', () => {})
                    //     // }
                    // })

                }) 
            //*/}

            {const tabItems = document.querySelectorAll('.tab_menu--title')
            const contents = document.querySelectorAll('.tab_content')
            tabItems.forEach(clickedItem => {
                clickedItem.addEventListener('click', e => {
                    console.log('click');
                    e.preventDefault();

                    tabItems.forEach(item => {
                        item.classList.remove('active')
                    })
                    clickedItem.classList.add('active')
                    
                    contents.forEach(content => {
                        content.classList.remove('active')
                    })
                    document.getElementById(clickedItem.dataset.tabTarget).classList.add('active')
                    
                })
            })
        }
                <div id="all" className="tab_content active">
                    <ul>
                        <li>
                            list
                            <button>Edit</button>
                            <button>Complete</button>
                        </li>
                        <li>
                            list2
                            <button>Edit</button>
                            <button>Complete</button>
                        </li>
                        <li>
                            listList
                            <button>Edit</button>
                            <button>Complete</button>
                        </li>
                    </ul>
                </div>

                <div id="incomplete" className="tab_content">
                    <ul>
                        <li>
                            list
                            <button>Edit</button>
                            <button>Complete</button>
                        </li>
                    </ul>
                </div>
                
                <div id="inprogress" className="tab_content">
                    <ul>
                        <li>
                            list2
                            <button>Edit</button>
                            <button>Complete</button>
                        </li>
                    </ul>
                </div>

                <div id="complete" className="tab_content">
                    <ul>
                        <li>
                            listList
                            <button>Edit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default App