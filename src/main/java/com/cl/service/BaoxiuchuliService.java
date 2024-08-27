package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.BaoxiuchuliEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.BaoxiuchuliView;


/**
 * 报修处理
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface BaoxiuchuliService extends IService<BaoxiuchuliEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<BaoxiuchuliView> selectListView(Wrapper<BaoxiuchuliEntity> wrapper);
   	
   	BaoxiuchuliView selectView(@Param("ew") Wrapper<BaoxiuchuliEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<BaoxiuchuliEntity> wrapper);
   	

}

