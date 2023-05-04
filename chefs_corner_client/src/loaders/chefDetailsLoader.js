const chefDetailsLoader = async (params) => {
    // console.log(typeof params.chefId);
    const a = await fetch(`/chef/${params.chefId}`);
    const b = await a.json();
    // let res = b.find(x => x.id === parseInt(params));
    console.log(b);
    return a;
}

export default chefDetailsLoader;