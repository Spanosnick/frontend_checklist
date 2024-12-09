'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "./flex-grid.css";


export default function Home() {

    return (
        <div>

            <div className='grid-container'>

                <div className='grid-item grid-item-1'> header
                </div>
                <div className='grid-item grid-item-2'>side bar
                </div>
                <div className='grid-item grid-item-3'>main</div>
                <div className='grid-item grid-item-4'>Footer</div>


            </div>
        </div>
    );
}
