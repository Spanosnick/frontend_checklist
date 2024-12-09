'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "./flex-grid.css";


export default function Home() {

    return (
        <div>

            <div className='grid-container'>

                <div className='grid-item grid-item-1'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sanctus
                    duis dolores aliquid odio enim ea
                    nibh sanctus cillum invidunt nihil consequat. Eos feugait ullamcorper facer accusam pariatur laoreet
                    facer nonummy vero esse est reprehenderit ex soluta cupiditat deserunt volutpat ad facilisis enim
                    gubergren aliqua facilisis volutpat accumsan. Tation blandit magna id deserunt sed autem voluptate.
                    Invidunt exerci dolores qui mollit dolore sit aute sint odio ex obcaecat hendrerit consectetuer
                    veniam vero obcaecat. Commodi fugiat aute blandit adipisici in tincidunt volutpat facilisis odio
                    clita consetetur consequat hendrerit eros veniam ea vulputate. Illum nam anim. Eos ad labore tation.
                    Eirmod nostrud ea.
                </div>
                <div className='grid-item grid-item-2'>side bar
                </div>
                <div className='grid-item grid-item-3'>Sit</div>
                <div className='grid-item grid-item-4'>Amet</div>
                <div className='grid-item grid-item-5'>Consectetur</div>

            </div>
        </div>
    );
}
