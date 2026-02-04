const Nav = () => {
    let img = React.createElement('img',{src:'http://127.0.0.1:5500/task/img/logo1.png'});

    let item1 = React.createElement('ui',{id:'item1', key:'it1'},'About Me');
    let item2 = React.createElement('ui',{id:'item2' , key:'it2'},'Portfolio');
    let item3 = React.createElement('ui',{id:'item3', key:'it3'},'Services');
    let item4 = React.createElement('ui',{id:'item4', key:'it4'},'Blog');

    let list = React.createElement('ul',null,[item1, item2, item3, item4]);

    let left = React.createElement('dev',{className:'left-nav'},[img, list]);

    let button = React.createElement('button',{className:'nav-button'},'Book A Call');

    let icon = React.createElement('i',{className:'ri-arrow-right-up-line'},null);

    let right = React.createElement('dev',{className:'right-nav'},[button, icon]);

    let nav = React.createElement('nav',{className:'nav'},[left, right]);

    return nav
}

export default Nav