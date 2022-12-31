import React, {useState} from 'react'
import {Divider, IconButton, Paper, Typography, Checkbox, TextField} from "@mui/material";
import './CalendarPage.css'
import {Menu} from "../../components/Menu";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

const CalendarPage = () => {

    const [boards, setBoards] = useState([
        {id: 1, date: '6.11', title:'ПН',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 1, title: 'Подстричь газон'},
                {id: 2, title: 'Погулять с собакой'},
                {id: 3, title: 'Сходить в магазин', highlight: '#9380ff'}
            ]
        },
        {id: 2, date: '7.11', title:'ВТ',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 4, title: 'Лабораторная', time: '14:00'}
            ]
        },
        {id: 3, date: '8.11', title:'СР',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 7, title: 'Написать доклад', time: '10:45'},
                {id: 8, title: 'Помыть машину'},
                {id: 9, title: 'Полить цветы'},
                {id: 10, title: 'Созвон', time: '13:45'},
                {id: 11, title: 'Выступление', time: '15:00', },
                {id: 12, title: 'Прогулка', time: '19:00'}
            ]
        },
        {id: 4, date: '9.11', title:'ЧТ',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 10, title: 'Огород', time: '10:00', highlight: '#f4ffcf'},
            ]
        },
        {id: 5, date: '10.11', title:'ПТ',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 13, title: 'Погулять с собакой'},
                {id: 14, title: 'Приготовить ужин', time: '18:00'}
            ]
        },
        {id: 6, date: '11.11', title:'СБ',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: []
        },
        {id: 7, date: '12.11', title:'ВС',
            habits: [
                {id: 1, title: 'Чтение'},
                {id: 2, title: 'Английский'},
                {id: 3, title: 'Трениковка'}
            ],
            tasks: [
                {id: 19, title: 'Просмотр фильма', highlight: '#34eb8c'},
                {id: 20, title: 'Уборка'}
            ]
        },
    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentItem, setCurrentItem] = useState(null)

    function dragOverHandler(e) {
        e.preventDefault()
        // if(e.target.className === 'item') {
            // e.target.style.boxShadow = '0 4px 3px gray'
        // }
    }

    function dragLeaveHandler(e) {
        // e.target.style.boxShadow = 'none'
    }

    function dragStartHandler(e, board, item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e) {
        // e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, item) {
        e.preventDefault()
        const currentIndex = currentBoard.tasks.indexOf(currentItem)
        currentBoard.tasks.splice(currentIndex, 1)
        const dropIndex = board.tasks.indexOf(item)
        board.tasks.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    function dropCardHandler(e, board) {
        e.preventDefault()
        console.log(board.tasks)
        board.tasks.push(currentItem)
        const currentIndex = currentBoard.tasks.indexOf(currentItem)
        currentBoard.tasks.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if(b.id === board.id) {
                return board
            }
            if(b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    return (
        <div>
            <div className='calendar-header'>
                <Menu/>
                <Typography variant='h4'>Календарь</Typography>
                <div>
                    <IconButton>
                        <ChevronLeftIcon sx={{color: 'black'}}/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon sx={{color: 'black'}}/>
                    </IconButton>
                </div>
            </div>
            <div className='week'>
                {boards.map(board =>
                    <Paper
                        elevation={4}
                        className='board'
                        onDragOver={(e) => dragOverHandler(e)}
                        onDrop={(e) => dropCardHandler(e, board)}
                    >
                        <div className='board__header'>
                            <Typography variant='h5'>{board.title}</Typography>
                            <Typography variant='h5'>{board.date}</Typography>
                        </div>
                        <Divider sx={{mt: 1, mb: 1}}/>
                        <div className='board__habit-list'>
                            {board.habits.map(habit =>
                                <div className='board__habit'>
                                    <Checkbox
                                        color="default"
                                        icon={<CloseIcon/>}
                                        checkedIcon={<CheckIcon/>}
                                    />
                                    <div className='board__habit-name'>{habit.title}</div>
                                </div>
                            )}
                        </div>
                        <Divider sx={{mt: 2, mb: 2}}/>
                        <div className='board__task-list'>
                            {board.tasks.map(task =>
                                <Paper
                                    elevation={2}
                                    className='board__task'
                                    onDragOver={(e) => dragOverHandler(e)}
                                    onDragLeave={(e) => dragLeaveHandler(e)}
                                    onDragStart={(e) => dragStartHandler(e, board, task)}
                                    onDragEnd={(e) => dragEndHandler(e)}
                                    onDrop={(e) => dropHandler(e, board, task)}
                                    draggable={true}
                                    sx={{background: task.highlight}}
                                >
                                    <div className='board__task-content'>
                                        <div className='board__task-time'>{task.time}</div>
                                        <div className='board__task-name'>{task.title}</div>
                                    </div>
                                    <Checkbox
                                        color="default"
                                        icon={<RadioButtonUncheckedIcon/>}
                                        checkedIcon={<CheckCircleIcon/>}
                                    />
                                </Paper>
                            )}
                            <div className='board__add-task'>
                                <TextField variant="standard" />
                                <IconButton>
                                    <AddIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </Paper>
                )}
            </div>
        </div>
    )
}

export default CalendarPage