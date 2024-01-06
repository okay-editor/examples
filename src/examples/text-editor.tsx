import './styles.css'
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react"
import Extensions from './extensions'
import { useEffect } from 'react'

// 默认文本编辑器
export default () => {
    const editor = useEditor({
        // 支持html和json
        content: '',
        autofocus: true,
        extensions: [
            ...Extensions
        ],
        // 更新时回调
        onUpdate: ({ editor, transaction }) => {
            console.log(editor.getJSON())
        }
    })

    useEffect(() => {
        console.log(1)
    }, [])

    return <>

        {/** 标题 */}
        <div className='example-title'>默认文本编辑器</div>

        {/** 菜单栏 */}
        <div className='menu-bar'>
            <button onClick={() => editor?.chain().focus().toggleBold().run()}
                disabled={!editor?.can().chain().focus().toggleBold().run()}
                className={editor?.isActive('bold') ? 'is-active' : ''}>
                加粗
            </button>
            <button onClick={() => editor?.chain().focus().toggleItalic().run()}
                disabled={!editor?.can().chain().focus().toggleItalic().run()}
                className={editor?.isActive('italic') ? 'is-active' : ''}>
                斜体
            </button>
            <button onClick={() => editor?.chain().focus().toggleStrike().run()}
                disabled={!editor?.can().chain().focus().toggleStrike().run()}
                className={editor?.isActive('strike') ? 'is-active' : ''}>
                删除线
            </button>
            <button onClick={() => editor?.chain().focus().toggleCode().run()}
                disabled={!editor?.can().chain().focus().toggleCode().run()}
                className={editor?.isActive('code') ? 'is-active' : ''}>
                代码
            </button>
            <button onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                清除格式
            </button>
            <button onClick={() => editor?.chain().focus().clearNodes().run()}>
                清除节点
            </button>
            <button onClick={() => editor?.chain().focus().setParagraph().run()}
                className={editor?.isActive('paragraph') ? 'is-active' : ''}>
                段落
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor?.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                标题1
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
                className={editor?.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                标题2
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
                className={editor?.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
                标题3
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
                className={editor?.isActive('heading', { level: 4 }) ? 'is-active' : ''}>
                标题4
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
                className={editor?.isActive('heading', { level: 5 }) ? 'is-active' : ''}>
                标题5
            </button>
            <button onClick={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
                className={editor?.isActive('heading', { level: 6 }) ? 'is-active' : ''}>
                标题6
            </button>
            <button onClick={() => editor?.chain().focus().toggleBulletList().run()}
                className={editor?.isActive('bulletList') ? 'is-active' : ''}>
                无序列表
            </button>
            <button onClick={() => editor?.chain().focus().toggleOrderedList().run()}
                className={editor?.isActive('orderedList') ? 'is-active' : ''}>
                有序列表
            </button>
            <button onClick={() => editor?.chain().focus().toggleCodeBlock().run()}
                className={editor?.isActive('codeBlock') ? 'is-active' : ''}>
                代码块
            </button>
            <button onClick={() => editor?.chain().focus().toggleBlockquote().run()}
                className={editor?.isActive('blockquote') ? 'is-active' : ''}>
                引用
            </button>
            <button onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
                分隔线
            </button>
            <button onClick={() => editor?.chain().focus().setHardBreak().run()}>
                换行
            </button>
            <button
                onClick={() => editor?.chain().focus().undo().run()}
                disabled={!editor?.can().chain().focus().undo().run()}>
                取消
            </button>
            <button onClick={() => editor?.chain().focus().redo().run()}
                disabled={!editor?.can().chain().focus().redo().run()}>
                还原
            </button>
            <button
                onClick={() => editor?.chain().focus().setColor('#958DF1').run()}
                className={editor?.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}>
                设置颜色
            </button>
        </div>

        {/** 选中菜单 */}
        {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <button onClick={() => editor?.chain().focus().toggleBold().run()}
                className={editor?.isActive('bold') ? 'is-active' : ''}>
                加粗
            </button>
            <button onClick={() => editor?.chain().focus().toggleItalic().run()}
                className={editor?.isActive('italic') ? 'is-active' : ''} >
                斜体
            </button>
            <button onClick={() => editor?.chain().focus().toggleStrike().run()}
                className={editor?.isActive('strike') ? 'is-active' : ''}>
                删除线
            </button>
        </BubbleMenu>}

        {/** 浮动菜单 */}
        { /** editor && <FloatingMenu className="floating-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                标题
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={editor.isActive('bulletList') ? 'is-active' : ''}>
                列表
            </button>
        </FloatingMenu> */}

        {/** 加载内容 */}
        <EditorContent editor={editor} />
    </>
}