import React, { useState } from 'react';
import '../css/Notice.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';
import Footer from '../layout/Footer';

function Notice() {
    const [noticeContent, setNoticeContent] = useState({
        title: '',
        content: ''
    });

    const [viewContent, setViewContent] = useState([]);

    const [editIndex, setEditIndex] = useState(null);

    // 입력 폼 초기화
    const resetForm = () => {
        setNoticeContent({
            title: '',
            content: ''
        });
        setEditIndex(null);
    };

    // 등록 또는 수정 처리
    const handleSubmit = () => {
        if (editIndex !== null) {
            // 수정 중인 아이템의 경우
            const updatedContent = [...viewContent];
            updatedContent[editIndex] = { ...noticeContent };
            setViewContent(updatedContent);
            resetForm();
        } else {
            // 새로운 아이템 추가
            setViewContent(viewContent.concat({ ...noticeContent }));
            resetForm();
        }
    };

    // 삭제 기능 구현
    const handleDelete = index => {
        setViewContent(viewContent.filter((_, i) => i !== index));
    };

    // 수정 기능 구현
    const handleEdit = index => {
        const editedItem = viewContent[index];
        setNoticeContent(editedItem);
        setEditIndex(index);
    };

    return (
        <div>
            <div className="notice my-3">
                <h1>Notice</h1>
                <div className="notice-container">
                    {viewContent.map((element, index) => (
                        <div key={index}>
                            <h2>{element.title}</h2>
                            <div>{ReactHtmlParser(element.content)}</div>
                            <button onClick={() => handleDelete(index)}>삭제</button>
                            <button onClick={() => handleEdit(index)}>수정</button>
                        </div>
                    ))}
                </div>
                <div className="notice-form-wrapper">
                    <input
                        className="notice-title-input"
                        type="text"
                        placeholder="제목"
                        onChange={e => setNoticeContent({ ...noticeContent, title: e.target.value })}
                        value={noticeContent.title}
                    />
                    <CKEditor
                        editor={ClassicEditor}
                        data={noticeContent.content}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            setNoticeContent({ ...noticeContent, content: data });
                        }}
                    />
                </div>
                <button className="notice-sumbit-button" onClick={handleSubmit}>
                    {editIndex !== null ? '수정' : '입력'}
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Notice;
