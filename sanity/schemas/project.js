export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'titleOfProject',
            title: 'projectTitle',
            type: 'string',
        },
        {
            name: 'techStack',
            title: 'stackUsed',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.unique()
        },
        {
            name: 'description',
            title: 'projectDescription',
            type: 'text',
        },
        {
            name: 'url',
            title: 'projectUrl',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            })
        }
    ],
}
