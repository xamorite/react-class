const Footer = () => {
    const youtube = "https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4";
    return ( 
        <div className=" absolute w-full p-10 bg-black text-white">
        <div className="flex justify-between flex-row">
            <a href={youtube}><li>location</li></a>
            <a href={youtube}><li>location</li></a>
            <a href={youtube}><li>location</li></a>
            <a href={youtube}><li>location</li></a>
        </div>
        </div>
    );
}
 
export default Footer;