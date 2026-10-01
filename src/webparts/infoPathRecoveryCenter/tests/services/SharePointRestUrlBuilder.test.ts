import { addUsingPath,byServerRelativePath } from '../../services/SharePointRestUrlBuilder';
it('passes the complete parent folder and filename only',()=>{expect(byServerRelativePath('/sites/x/Docs/GEN')).toContain('/sites/x/Docs/GEN');expect(addUsingPath('file.pdf')).toContain("decodedurl='file.pdf'");});
