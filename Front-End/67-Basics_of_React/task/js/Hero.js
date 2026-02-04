const Hero = () => {

    let p1 = React.createElement('p',{className:'timeline-p1'},'2024');

    let br = React.createElement('div',{className:'timeline-br'},null);

    let p2 = React.createElement('p',{className:'timeline-p2'},'Product designer');

    let timeline = React.createElement('div',{className:'timeline-hero'},[p1, br, p2]);

    let com_h4 = React.createElement('h4',{className:'com-h4'},'+200');

    let com_p = React.createElement('p',{className:'com-p'},'Project completed');

    let project_com = React.createElement('div',{className:'com-project'},[com_h4, com_p]);

    let start_h4 = React.createElement('h4',{className:'start-h4'},'+50');

    let start_p = React.createElement('p',{className:'start-p'},'Startup raised');

    let project_startup = React.createElement('div',{className:'startup-project'},[start_h4, start_p]);

    let project = React.createElement('div',{className:'project-hero'},[project_com, project_startup]);

    let text_h4 = React.createElement('h4',{className:'text-h4'},'Hello');

    let text_p = React.createElement('p',{className:'text-p'},`- It's D.Nova a design wizerd`);

    let text = React.createElement('div',{className:'text-hero'},[text_h4, text_p]);

    let button = React.createElement('button',{className:'button-hero'},'Scroll down');

    let icon = React.createElement('i',{className:'ri-arrow-down-long-line'},null);

    let con_button = React.createElement('div',{className:'button-con-hero'},[button, icon]);
    
    let left = React.createElement('div',{className:'left-hero'},[timeline, project, text, con_button]);

    let right = React.createElement('div',{className:'right-hero'},null);

    let hero = React.createElement('div',{className:'hero'},[left, right]);

    return hero
}

export default Hero