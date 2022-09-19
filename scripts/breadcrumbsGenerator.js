const mountBreadcrumbs = paramatersList => {
    const breadcrumbs = [];

    let breadcrumbUrl = '';
    for (let paramater in paramatersList){
        const currentParameter = paramatersList[paramater];
        let breadcrumbName = '';

        if(currentParameter.includes('-')){
            let splited = currentParameter.split('-');
            for(let i = 0; i < splited.length; i++) {
                splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1);
            };
            breadcrumbName = splited.join(' ');
        } else if(paramater === 'product'){
            breadcrumbName = product[0].name;
        } else {
            breadcrumbName = currentParameter[0].toUpperCase() + currentParameter.slice(1);
        }

        breadcrumbUrl += `/${ currentParameter }`;
        breadcrumbs.push({ url: breadcrumbUrl, name: breadcrumbName });
    }

    return breadcrumbs;
}

module.exports = {
    mountBreadcrumbs: mountBreadcrumbs
};