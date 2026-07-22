app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ['self'] } }));
