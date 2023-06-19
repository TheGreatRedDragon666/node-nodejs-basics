const parseEnv = () => {
    const result = [];
   Object.entries(process.env).filter(([key, value]) => key.startsWith('RSS_')).forEach(([key, value]) => {
       result.push(`${key}=${value}`);
    })
    console.log(result.join('; '));
};

parseEnv();
